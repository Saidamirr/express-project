import Post from './post.js'

class PostService {
    async create (post) {
        const createdPost = await Post.create(post)
        res.status(200).json(createdPost)
    }

    async getAll(req, res) {
        try {
            const posts = await Post.find();
            return res.json(posts);
        } catch (error) {
           res.status(500).json(error) 
        } 
    }

    async getOne(req, res) {
        try {
            const { id } = req.params;
            if(!id) {
                res.status(400).json({message: 'ID is not provided'})
            }
            const post = await Post.findById(id);
            return res.json(post);
        } catch (error) {
           res.status(500).json(error) 
        } 
    }

    async update(req, res) {
        try {
            const post = req.body;
            if(!post._id) {
                res.status(400).json({message: 'ID is not provided'})
            }
            const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true })
            return res.json(updatedPost)
        } catch (error) {
           res.status(500).json(error) 
        } 
    }

    async delete(req, res) {
        try {
            const {id} = req.params;
            if(!id) {
                res.status(400).json({message: 'ID is not provided'})
            }
            const post = await Post.findByIdAndDelete(id);
            return res.json(post);
        } catch (error) {
           res.status(500).json(error) 
        } 
    }
}

export default new PostService();