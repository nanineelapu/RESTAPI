package com.loginpage.api.logincontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.loginpage.api.entity.LoginEntity;
import com.loginpage.api.loginservices.LoginServices;

@RestController
@RequestMapping("/api/v1")
public class LoginController {

	@Autowired
	LoginServices lservice;
	
	
	@CrossOrigin("http://localhost:4200")
	@PostMapping("/login")
	public LoginEntity login(@RequestBody LoginEntity l) {
		
		return lservice.login(l);
	}
	
	@GetMapping("/logingetall")
	public List<LoginEntity> getAll(){
		
		return lservice.getall();
	}
}
