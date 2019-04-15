package com.ibm.grill.app.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.ibm.grill.app.model.Griller;

public interface GrillerRepository extends CrudRepository<Griller,Integer>{

}
