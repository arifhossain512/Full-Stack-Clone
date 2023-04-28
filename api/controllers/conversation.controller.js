import createError from "../utils/createError.js";
import Conversation from "../models/conversation.model.js";

export const createConversation = async (req, res, next) => {
  const newConversation = new Conversation({
    id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
    sellerId: req.isSeller ? req.userId : req.body.to,
    buyerId: req.isSeller ? req.body.to : req.userId,
    readBySeller: req.isSeller,
    readByBuyer: !req.isSeller,
  });

  try {
    const savedConversation = await newConversation.save();
    res.status(201).send(savedConversation);
  } catch (err) {
    next(err);
  }
};

export const updateConversation = async (req, res, next) => {
  try {
    const updatedConversation = await Conversation.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: {
          // readBySeller: true,
          // readByBuyer: true,
          ...(req.isSeller ? { readBySeller: true } : { readByBuyer: true }),
        },
      },
      { new: true }
    );

    res.status(200).send(updatedConversation);
  } catch (err) {
    next(err);
  }
};

/**
 * This function retrieves a single conversation by its ID and sends it as a response, or returns a 404
 * error if the conversation is not found.
 * @param req - req stands for request and it is an object that contains information about the HTTP
 * request that was made, such as the request parameters, headers, and body. It is passed as the first
 * parameter to the getSingleConversation function.
 * @param res - `res` is the response object that is used to send the HTTP response back to the client.
 * It is an instance of the `http.ServerResponse` class in Node.js. The `res` object has methods like
 * `res.status()`, `res.send()`, `res.json()`, etc
 * @param next - `next` is a function that is used to pass control to the next middleware function in
 * the stack. It is typically used to handle errors or to move on to the next function in the chain of
 * middleware functions. If an error occurs in the current middleware function, it can call `next` with
 * @returns This code returns a single conversation object from the database that matches the id
 * parameter in the request URL. If a conversation with the specified id is not found, it will return a
 * 404 error using the `createError` function from the `http-errors` package. If there are any other
 * errors during the execution of the function, it will call the `next` function with the error object
 * to pass
 */
export const getSingleConversation = async (req, res, next) => { //this 
  try {
    const conversation = await Conversation.findOne({ id: req.params.id });
    if (!conversation) return next(createError(404, "Not found!"));
    res.status(200).send(conversation);
  } catch (err) {
    next(err);
  }
};

/**
 * This function retrieves conversations from the database based on the user's role (seller or buyer)
 * and sends them as a response.
 * @param req - req stands for request and it is an object that contains information about the HTTP
 * request that was made, such as the request headers, query parameters, and request body. It is passed
 * as a parameter to the function.
 * @param res - The `res` parameter is the response object that will be sent back to the client with
 * the requested data or error message. It is used to set the HTTP status code and send the response
 * data.
 * @param next - `next` is a function that is called when an error occurs during the execution of the
 * middleware function. It passes the error to the next middleware function in the chain or to the
 * error handling middleware.
 */
export const getConversations = async (req, res, next) => {
  try {
    const conversations = await Conversation.find(
      req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }
    ).sort({ updatedAt: -1 });
    res.status(200).send(conversations);
  } catch (err) {
    next(err);
  }
};
