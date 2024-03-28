
import mongoose from 'mongoose';
import clientModel from "../models/client.model.js";

// Retrieve all clients from the database
export default class ClientController {

async addClient(req,res){
    console.log(req.body)
    try {
        const newClient=await clientModel.create(req.body);
        res.status(201).json(newClient);
      } catch (error) {
        console.error(`error: ${error}`);
        return error;
      }
  }
  async getAllClients(req, res) {
    try {      
      const client = await clientModel.find();
      if (client instanceof Error) {
        res.status(404).json({ message: client.message, error: true });
      } else {
        res.status(200).json(client);
      }
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
  async updateClient(req, res) {
    try {
      const Client = await clientModel.findOneAndUpdate(req.params.id);
      if (Client instanceof Error) {
        if (Client.message === 'Client_NOT_FOUND') {
          return res.status(404).json({ message: 'Client_NOT_FOUND' });
        } else {
          return res.status(400).json({ message: Client, error: true });
        }
      }
      return res.status(200).json(Client);
    } catch (error) {
      return res.status(400).json({ message: error.message, error: true });
    }
  }
  async deleteClient(req, res) {
    try {
      const Client = await clientModel.findOneAndDelete({id:req.params.id});
      if (Client instanceof Error) {
        if (Client.message === 'Client_NOT_FOUND') {
          return res.status(404).json({ message: 'Client_NOT_FOUND' });
        } else {
          return res.status(400).json({ message: Client, error: true });
        }
      }
      return res.status(200).json(Client);
    } catch (error) {
      return res.status(400).json({ message: error.message, error: true });
    }
  }


}
//module.exports = { getAllClients, getClientById, addClient, updateClient, deleteClient };

