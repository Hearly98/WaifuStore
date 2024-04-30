package com.cibertec.waifustore.waifustore.repository;

import com.cibertec.waifustore.waifustore.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer> {
}

