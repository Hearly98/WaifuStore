package com.cibertec.waifustore.waifustore.service;

import com.cibertec.waifustore.waifustore.model.Booking;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public interface BookingService {

    List<Booking> getAll();
    Optional<Booking> getById(int id);
    Booking save(Booking booking);
    void deleteById(int id);
}

