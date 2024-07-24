package com.loginpage.api.Loginrepo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.loginpage.api.entity.LoginEntity;

@Repository
public interface LoginRepository extends CrudRepository<LoginEntity, Integer>{
	
}
