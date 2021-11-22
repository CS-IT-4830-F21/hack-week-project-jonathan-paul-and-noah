package hackweek.mizzou.jpnn.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import hackweek.mizzou.jpnn.backend.model.Post;
import hackweek.mizzou.jpnn.backend.service.PostService;

@RestController
@RequestMapping("posts")
public class PostController 
{
	@Autowired
	PostService postService;
	
    @GetMapping(value = "/getPosts")
    public List<Post> getPosts() 
    {
    	List<Post> posts = postService.getAllPosts();
    	
    	return posts;
    }
    
    @GetMapping(value = "/getPost")
    public Post getPost(@RequestParam int id)
    {
    	Post post = postService.getPost(id);
    	
    	return post;
    }
    
    @DeleteMapping(value = "/deletePost")
    public boolean deletePost(@RequestParam int id)
    {
    	boolean deleted = postService.deletePost(id);
    	
    	return deleted;
    }
    
    @PostMapping(value = "savePost")
    public boolean savePost(@RequestBody Post post)
    {
    	boolean saved = postService.savePost(post);
    	
    	return saved;
    }
}
