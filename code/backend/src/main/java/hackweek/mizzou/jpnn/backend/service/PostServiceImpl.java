package hackweek.mizzou.jpnn.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hackweek.mizzou.jpnn.backend.dao.PostDAO;
import hackweek.mizzou.jpnn.backend.model.Post;

@Service
public class PostServiceImpl implements PostService
{
	
	@Autowired
	PostDAO postDAO;

	@Override
	public boolean savePost(Post post) 
	{
		return postDAO.savePost(post);
	}

	@Override
	public boolean deletePost(int id) 
	{
		return postDAO.deletePost(id);
	}

	@Override
	public Post getPost(int id) 
	{
		return postDAO.getPost(id);
	}

	@Override
	public List<Post> getAllPosts()
	{
		return postDAO.getAllPosts();
	}

}
