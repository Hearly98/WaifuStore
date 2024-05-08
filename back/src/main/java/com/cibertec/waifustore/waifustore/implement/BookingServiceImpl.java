package com.cibertec.waifustore.waifustore.implement;

import com.cibertec.waifustore.waifustore.model.Booking;
import com.cibertec.waifustore.waifustore.service.BookingService;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Booking> getAll() {
        return entityManager.createQuery("SELECT b FROM Booking b", Booking.class).getResultList();
    }

    @Override
    public Optional<Booking> getById(int id) {
        Booking booking = entityManager.find(Booking.class, id);
        return Optional.ofNullable(booking);
    }

    @Transactional
    @Override
    public Booking save(Booking booking) {
        if (booking.getId() == null) {
            entityManager.persist(booking);
        } else {
            booking = entityManager.merge(booking);
        }
        return booking;
    }

    @Transactional
    @Override
    public void deleteById(int id) {
        Booking booking = entityManager.find(Booking.class, id);
        if (booking != null) {
            entityManager.remove(booking);
        }
    }
}
