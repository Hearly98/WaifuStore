package com.cibertec.waifustore.waifustore.service;

import com.cibertec.waifustore.waifustore.model.Header;
import com.cibertec.waifustore.waifustore.model.PayMethod;

import java.util.List;
import java.util.Optional;

public interface HeaderService {

    List<Header> getAll();
    Optional<Header> getById(int id);
    Header save(Header header);

}
