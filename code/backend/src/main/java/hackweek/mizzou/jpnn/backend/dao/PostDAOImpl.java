package hackweek.mizzou.jpnn.backend.dao;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import hackweek.mizzou.jpnn.backend.model.Post;

public class PostDAOImpl implements PostDAO
{
	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	public PostDAOImpl(DataSource dataSource) 
	{
		jdbcTemplate = new JdbcTemplate(dataSource);
	}

	@Override
	public boolean savePost(Post post) 
	{
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean deletePost(int id) 
	{
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Post getPost(int id) 
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Post> getAllPosts() 
	{
		// TODO Auto-generated method stub
		return null;
	}

}
