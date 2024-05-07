package com.cibertec.waifustore.waifustore.service;

import com.cibertec.waifustore.waifustore.model.PayMethod;

import java.util.List;
import java.util.Optional;

public interface PayMethodService {

    List<PayMethod> getAll();
    Optional<PayMethod> getById(int id);
    PayMethod save(PayMethod payMethod);
    void deleteById(int id);
}
