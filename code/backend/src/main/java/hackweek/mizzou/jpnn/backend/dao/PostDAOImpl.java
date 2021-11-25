package hackweek.mizzou.jpnn.backend.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import hackweek.mizzou.jpnn.backend.model.Post;
import hackweek.mizzou.jpnn.backend.model.PostMapper;

@Component
public class PostDAOImpl implements PostDAO
{
	@Autowired
    private JdbcTemplate jdbcTemplate;
	
	@Override
	public boolean savePost(Post post) 
	{
		int rows = 0;
		if (post.getId() > 0) 
		{
			// update
			String sql = "UPDATE posts SET title=?, description=?, language=?, code=?, timestamp=? WHERE id=?";
			rows = jdbcTemplate.update(sql, post.getTitle(), post.getDescription(), post.getLanguage(), post.getCode(),
					post.getTimestamp(), post.getId());
		}
		else
		{
			// insert
			String sql = "INSERT INTO posts (authorId, title, description, language, code, timestamp) VALUES (?, ?, ?, ?, ?, ?)";
			rows = jdbcTemplate.update(sql, post.getAuthorId(), post.getTitle(), post.getDescription(), post.getLanguage(),
					post.getCode(), post.getTimestamp());
		}
		
		if(rows > 0)
		{
			return true;
		}
		
		return false;
	}

	@Override
	public boolean deletePost(int id) 
	{
		String sql = "DELETE FROM posts WHERE id=?";
		int rows = jdbcTemplate.update(sql, id);
		
		if(rows > 0)
		{
			return true;
		}

		return false;
	}

	@Override
	public Post getPost(int id) 
	{
		String sql = "SELECT * FROM posts WHERE id=" + id;
		Post post;
		try
		{
			post = jdbcTemplate.queryForObject(sql, new PostMapper());
		}
		catch(EmptyResultDataAccessException e)
		{
			return null;
		}
		
		return post;
	}

	@Override
	public List<Post> getAllPosts() 
	{
		String sql = "SELECT * FROM posts";
		List<Post> postsList = jdbcTemplate.query(sql, new PostMapper());
		
		return postsList;
	}

}
