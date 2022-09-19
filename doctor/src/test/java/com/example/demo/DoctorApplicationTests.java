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

import com.example.demo.Repo.DoctorRepo;
import com.example.demo.entity.Doctor;
import com.example.demo.service.DoctorImple;

@TestMethodOrder(OrderAnnotation.class)
@SpringBootTest(classes = {DoctorApplicationTests.class})
class DoctorApplicationTests {

	@Mock
	DoctorRepo doctorRepo;
	
	@InjectMocks
	DoctorImple doctorser;
	
	List<Doctor> docList;
	
	@Test
	@Order(1)
	public void testGetAllDoctors() {
		
		docList = new ArrayList<>();
		docList.add(new Doctor(1,"Ram",28,"male","Heart",0));
		docList.add(new Doctor(2,"Priya",26,"female","Brain",0));
		
		when(doctorRepo.findAll()).thenReturn(docList);
		
		assertEquals(2,doctorser.getDoctor().size() );	
	}
	
	
	
	@Test
	@Order(2)
	public void testAddDoctor() {
		

		Doctor sgleDoc=new Doctor(1,"Ram",28,"male","Heart",0);
		
        when(doctorRepo.save(sgleDoc)).thenReturn(sgleDoc);
		
		assertEquals(sgleDoc,doctorser.saveDoctor(sgleDoc));
	}
	
	@Test
	@Order(3)
	public void testGetDoctorById() {
		
		docList = new ArrayList<>();
		docList.add(new Doctor(1,"Ram",28,"male","Heart",0));
		docList.add(new Doctor(2,"Priya",26,"female","Brain",0));
		
		int doctorid=2; 
		
		when(doctorRepo.findAll()).thenReturn(docList);
		
		assertEquals(2,doctorser.GetdoctorById(doctorid).getId() );	
	}
	
	@Test
	@Order(4)
	public void testGetDoctorsNames() {
		
		docList = new ArrayList<>();
		docList.add(new Doctor(1,"Ram",28,"male","Heart",0));
		docList.add(new Doctor(2,"Priya",26,"female","Brain",0));
		
       when(doctorRepo.findAll()).thenReturn(docList);
		
		assertEquals("Ram",doctorser.getDocName().get(0));
	}


}
