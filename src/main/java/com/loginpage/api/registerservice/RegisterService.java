package com.loginpage.api.registerservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.loginpage.api.registerpage.RegisterEntity;
import com.loginpage.api.registerrepo.RegisterRepo;

@Service
public class RegisterService {
	
	@Autowired
	RegisterRepo regrepo;
	
	public RegisterEntity register(RegisterEntity regentity) {
		
		return regrepo.save(regentity);
	}
	
	
}
