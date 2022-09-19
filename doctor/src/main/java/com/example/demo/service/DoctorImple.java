package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repo.DoctorRepo;
import com.example.demo.entity.Doctor;
import com.example.demo.exception.DoctorNotFoundException;

@Service
public class DoctorImple implements DoctorService {
	
	@Autowired
	private DoctorRepo doctorRepo;

	@Override
	public Doctor saveDoctor(Doctor doctor) {
		// TODO Auto-generated method stub
		
		return doctorRepo.save(doctor);
	}

	@Override
	public List<Doctor> getDoctor() {
		// TODO Auto-generated method stub
		return doctorRepo.findAll();
	}

	@Override
	public Doctor GetdoctorById(long doc_id) {
		// TODO Auto-generated method stub
		
List<Doctor> doxtorList=doctorRepo.findAll();
		
		Doctor doc=null;
		
		for(Doctor doclst:doxtorList)
		{
			if(doclst.getId()==doc_id)
			{
				doc=doclst;
				return doc;
			}
			
		}
		
		throw new DoctorNotFoundException("No Doctor found with id : "+doc_id);
		
		
	}

	@Override
	public void setDocPatientCount(String name, int count) {
		// TODO Auto-generated method stub
		
		Doctor dr=doctorRepo.findByName(name);
		
		
		if(dr!=null)
		{
			int pvPCount=dr.getPCount();
			if(count>0)
			{
				pvPCount+=count;
				
				dr.setPCount(pvPCount);
				doctorRepo.save(dr);
			}
		}
		
	}

	@Override
	public List<String> getDocName() {
		// TODO Auto-generated method stub
		List<Doctor> drList=doctorRepo.findAll();
		
		List<String> name=new ArrayList();
		
		for(Doctor dr:drList)
		{
			name.add(dr.getName());
		}
		
		return name;
	}

	

}
