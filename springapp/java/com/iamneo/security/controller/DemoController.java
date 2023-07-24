package com.iamneo.security.controller;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.Insurance;
import com.iamneo.security.entity.Model;
import com.iamneo.security.repository.InsuranceRepository;
import com.iamneo.security.repository.ModelRepository;
import com.iamneo.security.repository.UserRepository;
import com.iamneo.security.service.AuthenticationService;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/demo")
@RequiredArgsConstructor
@CrossOrigin(origins = "*",allowedHeaders ="*")


public class DemoController {

	
	 private UserRepository userRepository;
	  private ModelRepository modelRepository;
     private InsuranceRepository insuranceRepository;
	    @Autowired
	    public void UserController(UserRepository userRepository, ModelRepository modelRepository,InsuranceRepository insuranceRepository) {
	        this.userRepository = userRepository;
	        this.modelRepository = modelRepository;
	        this.insuranceRepository=insuranceRepository;
	    }
	
	@Autowired
	AuthenticationService ser;
	
    @GetMapping
    public ResponseEntity<String> sayHello() {
        return ResponseEntity.ok("Hello! Siva Prasanna");
    }
    
    @PostMapping("/post")
    public Model create(@RequestBody Model models) {
        return userRepository.save(models);
        

    }
    @PostMapping("/postinsurance")
    public Insurance create(@RequestBody Insurance models) {
        return insuranceRepository.save(models);
        
        
    }
    
    
    @GetMapping("/get/{ins_Id}")
    public ResponseEntity<Model> getEmployeeById(@PathVariable String ins_Id) {
        Optional<Model> model = modelRepository.findById(ins_Id);
        return model.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    

    @GetMapping("/get/policy/{ins_Id}")
    public Optional<Insurance> getInsuranceById(@PathVariable String ins_Id) {
        Optional<Insurance> insurance = insuranceRepository.findById(ins_Id);
        return insurance;
    }
    
   

    @PutMapping("/renew/policy/{ins_Id}/{newAmount}")
    public ResponseEntity<Insurance> renewPolicyAmount(@PathVariable String ins_Id, @PathVariable double newAmount) {
        Optional<Insurance> optionalInsurance = insuranceRepository.findById(ins_Id);

        if (optionalInsurance.isPresent()) {
            Insurance existingInsurance = optionalInsurance.get();
            // Update the amount field with the newAmount
            existingInsurance.setRenew_amount(newAmount);

            // Save the updated insurance object
            insuranceRepository.save(existingInsurance);
            return ResponseEntity.ok(existingInsurance); // Return the updated insurance object with 200 OK status
        } else {
            return ResponseEntity.notFound().build(); // Return 404 Not Found if insurance with given ins_Id is not found
        }
    }


    
}
