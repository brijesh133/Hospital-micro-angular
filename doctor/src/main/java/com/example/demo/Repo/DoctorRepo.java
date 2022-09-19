package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Doctor;
@Repository
public interface DoctorRepo extends JpaRepository<Doctor,Long> {

	Doctor findByName(String name);

}