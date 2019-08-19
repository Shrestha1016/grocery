package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.CategoryDAO;
import com.example.demo.dao.ProductDAO;
import com.example.demo.dto.Category;
import com.example.demo.dto.Product;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class PageController {
	
	@Autowired
	private CategoryDAO categoryDAO;
	
	@Autowired
	private ProductDAO productDAO;
	
	
	
	
	@GetMapping(value="/show/all/products")
	public  List<Category> showAllProducts(Model model)	{
		model.addAttribute("listAll", true);
		return categoryDAO.findAll();
	}
	
	
	@GetMapping(value="/show/category/{id}/products")
	public  Category showCategoryProducts(@PathVariable int id)	{
		Category category = null;
		category = categoryDAO.findById(id).orElse(null);
		return category;
		
		
	}
	
	
	@GetMapping(value="/test")
	public List<Product> viewProduct()	{
		return productDAO.findAll();
	}
	
}
