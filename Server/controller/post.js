import PostMessage from "../model/postMessage.js"

export const getPost = async(req,res)=>{
    try {
        const postMessages = await PostMessage.find()
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}
export const createPost = async(req,res)=>{
   
    res.send("This Works!")
}

