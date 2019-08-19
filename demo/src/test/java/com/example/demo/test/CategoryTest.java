package com.example.demo.test;



import static org.junit.Assert.assertEquals;

import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.dao.CategoryDAO;
import com.example.demo.dto.Category;

public class CategoryTest {

	
	private static CategoryDAO categoryDAO;
	
	private Category category;
	
	
	
	
	
	@Test
	public void testAddCategory()	{
		category = new  Category();
		
		category.setName("Fruit");
		category.setDescription("veg only");
		 
		assertEquals(categoryDAO.save(category),true );
		//assertEquals("hello",categoryDAO.save(category),true);
		
	}
	
	
}
