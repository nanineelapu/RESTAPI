package com.loginpage.api.registercontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.loginpage.api.registerpage.RegisterEntity;
import com.loginpage.api.registerservice.RegisterService;

@RestController
@RequestMapping("/api/v1")
public class RegisterController {

	@Autowired
	RegisterService regservice;
	
	
	@CrossOrigin("http://localhost:4200")
	@PostMapping("/register")
	public RegisterEntity register(@RequestBody RegisterEntity regentity) {
		
		return regservice.register(regentity);
	}
}
