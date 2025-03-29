"use server"
import bcrypt from "bcrypt"
import { collectionsNameObj, dbConnect } from "@/lib/dbConnect";

const RegisterUser = async (payload) => {
    const userCollection = dbConnect(collectionsNameObj.userDB);
    const { email, password } = payload;
    
    const user = await userCollection.findOne({ email });
    if (!user) {
        const hashedPassword = await bcrypt.hash(password, 10);
        payload.password = hashedPassword;

        const result = await userCollection.insertOne(payload);
        result.insertedId = result.insertedId.toString()
        return {
            success: true,
            message: "User registered successfully",
            userId: result.insertedId
        };
    }
    return null;
};

export default RegisterUser;
