package com.loginpage.api.loginservices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.loginpage.api.Loginrepo.LoginRepository;
import com.loginpage.api.entity.LoginEntity;

@Service
public class LoginServices {
	
	@Autowired
	LoginRepository lrepo;
	
	public LoginEntity login(LoginEntity l) {
		
		return lrepo.save(l);
	}
	
	public List<LoginEntity> getall() {
		
	return (List<LoginEntity>) lrepo.findAll();
	}
}
