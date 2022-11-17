import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';
import SinglePostPage from './features/posts/SinglePostPage';
import Layout from './components/Layout';
import EditPostForm from './features/posts/EditPostForm';
import User from './features/users/User';
import UsersList from './features/users/UsersList';
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <Routes>  
      <Route path="/"  element={<Layout />} >
        <Route index element={<PostsList />}/>

        <Route path="post">
            <Route index element={<AddPostForm />}/>
            <Route path=":postId" element={<SinglePostPage />}/>
            <Route path="edit" >
                <Route path=":postId" element={<EditPostForm />}/>               
            </Route>     
        </Route>

        <Route path="user">
            <Route index element={<UsersList />}/>
            <Route path=":userId" element={<User />}/>     
        </Route>

      {/* Catch all - replace with 404 component if you want */}
      <Route path="*" element={<Navigate to="/" />}  />

      </Route>
    </Routes>
  );
}

export default App;
