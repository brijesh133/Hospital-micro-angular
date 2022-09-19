package com.example.demo;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.demo.controller.Controller;
import com.example.demo.entity.Doctor;
import com.example.demo.service.DoctorService;

@TestMethodOrder(OrderAnnotation.class)
@SpringBootTest(classes = {ResponseEntityTest.class})
public class ResponseEntityTest {
	
	@Mock
	DoctorService docService;

	@InjectMocks
	Controller con;

	List<Doctor> docList;
	Doctor doc;

	@Test
	@Order(1)
	public void testGetAllDoctors() {

		docList = new ArrayList<>();
		docList.add(new Doctor(1,"Ram",28,"male","Heart",0));
		docList.add(new Doctor(2,"Priya",26,"female","Brain",0));

		when(docService.getDoctor()).thenReturn(docList);

		ResponseEntity<?> resp = con.getDoctor();

		assertEquals(HttpStatus.OK, resp.getStatusCode());	
	}

	@Test
	@Order(2)
	public void testAddDoctor() {

		doc = new Doctor(2,"Priya",26,"female","Brain",0);

		when(docService.saveDoctor(doc)).thenReturn(doc);

		ResponseEntity<?> resp = con.saveDoctor(doc);

		assertEquals(HttpStatus.CREATED, resp.getStatusCode());	
	}

	@Test
	@Order(3)
	public void testGetDoctorById() {

		doc = new Doctor(2,"Priya",26,"female","Brain",0);

		int id = 2;

		when(docService.GetdoctorById(id)).thenReturn(doc);

		ResponseEntity<?> resp = con.GetdoctorById(id);
		String body=resp.getBody().toString();
		String id1=String.valueOf(body.charAt(10));
      
       assertEquals(id+"",id1);
		assertEquals(HttpStatus.OK, resp.getStatusCode());	
	}

	@Test
	@Order(4)
	public void testGetDoctorsNames() {

		List<String> docNames = new ArrayList<>();
		docNames.add("kohli");
		docNames.add("Dhoni");

		when(docService.getDocName()).thenReturn(docNames);

		ResponseEntity<?> resp = con.getDocName();

		
		assertEquals(HttpStatus.OK, resp.getStatusCode());	
	}
	

}
