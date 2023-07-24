	package com.iamneo.security.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Insurance{
	@Id
	private String ins_Id;
	private String policy_type;
	private String vechile_Number;
	private String License_Number;
	private String renew_type;	
	private double renew_amount;
	
	
	public Insurance(String ins_Id, String policy_type, String vechile_Number, String license_Number,
			String renew_type,double renew_amount) {
		
		this.ins_Id = ins_Id;
		this.policy_type = policy_type;
		this.vechile_Number = vechile_Number;
		License_Number = license_Number;
		this.renew_type = renew_type;
		this.renew_amount=renew_amount;
	}


	public String getIns_Id() {
		return ins_Id;
	}


	public void setIns_Id(String ins_Id) {
		this.ins_Id = ins_Id;
	}


	public String getPolicy_type() {
		return policy_type;
	}


	public void setPolicy_type(String policy_type) {
		this.policy_type = policy_type;
	}


	public String getVechile_Number() {
		return vechile_Number;
	}


	public void setVechile_Number(String vechile_Number) {
		this.vechile_Number = vechile_Number;
	}


	public String getLicense_Number() {
		return License_Number;
	}


	public void setLicense_Number(String license_Number) {
		License_Number = license_Number;
	}


	public String getRenew_type() {
		return renew_type;
	}


	public void setRenew_type(String renew_type) {
		this.renew_type = renew_type;
	}
    
	
	
	public double getRenew_amount() {
		return renew_amount;
	}
	
	public void setRenew_amount(double newAmount) {
		this.renew_amount = newAmount;
	}


	public Insurance() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	
}