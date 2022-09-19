package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Doctor;
import com.example.demo.service.DoctorService;

@RestController
@RequestMapping("/doctor")
public class Controller {
	
	@Autowired
	private DoctorService service;
	
	@PostMapping("/Createdoctor")
	public ResponseEntity<?> saveDoctor(@RequestBody Doctor doctor)
	{
		Doctor dtr= this.service.saveDoctor(doctor);
		return new ResponseEntity<Doctor>(dtr,HttpStatus.CREATED);
	}
	@GetMapping("/Getdoctor")
	public ResponseEntity<?> getDoctor()
	{
		List<Doctor> listDtr= this.service.getDoctor();
		return new ResponseEntity<List<Doctor>>(listDtr,HttpStatus.OK);
	}

	
	@GetMapping("/GetdoctorById/{doc_id}")
	public ResponseEntity<?> GetdoctorById(@PathVariable long doc_id)
	{
		try {
		Doctor dtr = this.service.GetdoctorById(doc_id);
		return new ResponseEntity<Doctor>(dtr,HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<String>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("update/count/{name}/{count}")
	public void setDocPatientCount(@PathVariable("name") String name, @PathVariable("count") int count){
		service.setDocPatientCount(name,count);
	}
	
	@GetMapping("GetDocName")
	public ResponseEntity<?> getDocName(){
		List<String> docName = service.getDocName();
		return new ResponseEntity<List<String>>(docName,HttpStatus.OK);
	}

}
