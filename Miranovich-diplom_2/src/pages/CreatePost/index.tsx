import CreatePostForm from "../../components/createPostForm";
import Title from "../../components/ThemeToggleButton/Title";

const CreatePost = () => {
  return (  
    <div>
      <Title>Create Post</Title>

      <div>
        <CreatePostForm />
      </div>
    </div>
  )
}

export default CreatePost;