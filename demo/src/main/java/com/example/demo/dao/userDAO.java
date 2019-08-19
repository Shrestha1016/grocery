package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.dto.User;

public interface userDAO extends JpaRepository<User, Integer>{

}
