package com.cibertec.waifustore.waifustore.implement;


import com.cibertec.waifustore.waifustore.model.PayMethod;
import com.cibertec.waifustore.waifustore.service.PayMethodService;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PayMethodServiceImpl implements PayMethodService {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<PayMethod> getAll() {
        return entityManager.createQuery("SELECT p from PayMethod p", PayMethod.class).getResultList();
    }

    @Override
    public Optional<PayMethod> getById(int id) {
        PayMethod payMethod = entityManager.find(PayMethod.class, id);

        return Optional.ofNullable(payMethod);
    }

    @Transactional
    @Override
    public PayMethod save(PayMethod payMethod) {
        if (payMethod.getId() == null) {
            entityManager.persist(payMethod);
        } else {
            payMethod = entityManager.merge(payMethod);
        }
        return payMethod;
    }


    @Transactional
    @Override
    public void deleteById(int id) {
        PayMethod payMethod = entityManager.find(PayMethod.class, id);
        if (payMethod != null) {
            entityManager.remove(payMethod);
        }
    }
}
