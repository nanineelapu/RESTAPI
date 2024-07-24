package com.loginpage.api.registerrepo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.loginpage.api.registerpage.RegisterEntity;

@Repository
public interface RegisterRepo extends CrudRepository<RegisterEntity, Integer>{

}
