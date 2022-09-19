package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Doctor;

public interface DoctorService {

	public Doctor saveDoctor(Doctor doctor);

	public List<Doctor> getDoctor();

	public Doctor GetdoctorById(long doc_id);

	public void setDocPatientCount(String name, int count);

	public List<String> getDocName();

}
