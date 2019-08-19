package com.example.demo.dto;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "user_detail")
public class User implements Serializable {
	
	//public class User implements Serializable{

		/**
		 * 
		 */
		private static final long serialVersionUID = 1L;

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private int id;
		@NotNull(message = "Please enter first name!")
		@Column(name = "first_name")
		private String firstName;
		@NotNull(message = "Please enter last name!")
		@Column(name = "last_name")
		private String lastName;
		@NotNull(message = "Please enter email address!")	
		private String email;
		@NotNull(message = "Please enter contact number!")
		@Column(name = "contact_number")
		private String contactNumber;
		private String role;
		@NotNull(message = "Please enter password!")
		private String password;
		@Transient
		private String confirmPassword;
		public String getConfirmPassword() {
			return confirmPassword;
		}
		public void setConfirmPassword(String confirmPassword) {
			this.confirmPassword = confirmPassword;
		}
		
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getFirstName() {
			return firstName;
		}
		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}
		public String getLastName() {
			return lastName;
		}
		public void setLastName(String lastName) {
			this.lastName = lastName;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getContactNumber() {
			return contactNumber;
		}
		public void setContactNumber(String contactNumber) {
			this.contactNumber = contactNumber;
		}
		public String getRole() {
			return role;
		}
		public void setRole(String role) {
			this.role = role;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
	
		
		@Override
		public String toString() {
			return "User [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
					+ ", contactNumber=" + contactNumber + ", role=" + role + ", password=" + password + ", enabled="
					 + "]";
		}
		
		
//		@OneToOne(mappedBy="user", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//		private Cart cart;
//		public Cart getCart() {
//			return cart;
//		}
//		public void setCart(Cart cart) {
//			this.cart = cart;
//		}
		
}

