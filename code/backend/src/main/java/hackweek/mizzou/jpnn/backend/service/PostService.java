package hackweek.mizzou.jpnn.backend.service;

import java.util.List;

import hackweek.mizzou.jpnn.backend.model.Post;

public interface PostService 
{
	public boolean savePost(Post post);
	
	public boolean deletePost(int id);
	
	public Post getPost(int id);
	
	public List<Post> getAllPosts();
}
