"use server"
import bcrypt from "bcrypt"
import { collectionsNameObj, dbConnect } from "@/lib/dbConnect";

const LoginUser = async (payload) => {
    const { email, password } = payload;
    const userCollection = dbConnect(collectionsNameObj.userDB);
    const user = await userCollection.findOne({ email });

    if (!user) return null;

    const isPasswordOk = await bcrypt.compare(password, user.password); 
    if (!isPasswordOk) return null;

    return user;
};

export default LoginUser;