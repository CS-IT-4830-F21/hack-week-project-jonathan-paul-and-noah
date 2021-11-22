package hackweek.mizzou.jpnn.backend.model;

import lombok.Data;

@Data
public class Post 
{
	private int id;
	private String title;
	private String description;
	private String lanuage;
	private String code;
}
