package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.dto.Product;

public interface ProductDAO  extends JpaRepository<Product,Integer>{

}
