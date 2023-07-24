package com.iamneo.security.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.security.entity.Insurance;



public interface InsuranceRepository extends JpaRepository<Insurance, String> {
	Optional<Insurance> findById(String ins_Id);
	
	
}
