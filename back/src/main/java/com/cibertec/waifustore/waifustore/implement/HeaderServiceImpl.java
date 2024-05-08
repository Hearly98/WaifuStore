package com.cibertec.waifustore.waifustore.implement;


import com.cibertec.waifustore.waifustore.model.Header;
import com.cibertec.waifustore.waifustore.model.Sales;
import com.cibertec.waifustore.waifustore.repository.HeaderRepository;
import com.cibertec.waifustore.waifustore.repository.SalesRepository;
import com.cibertec.waifustore.waifustore.service.HeaderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class HeaderServiceImpl implements HeaderService {
    @Autowired
    private HeaderRepository headerRepository;

    @Autowired
    private SalesRepository salesRepository;

    @Override
    public List<Header> getAll() {
        return headerRepository.findAll();
    }

    @Override
    public Optional<Header> getById(int id) {
        return headerRepository.findById(id);
    }

    @Override
    public Header save(Header header) {
    // Aquí podrías realizar alguna validación o lógica de negocio antes de guardar el encabezado
        return headerRepository.save(header);
    }

    // Método para obtener todas las ventas de un encabezado específico
    public List<Sales> getSalesByHeaderId(int headerId) {
        Optional<Header> headerOptional = headerRepository.findById(headerId);
        if (headerOptional.isPresent()) {
            Header header = headerOptional.get();
            return (List<Sales>) header.getSales();
        }
        return Collections.emptyList();
    }
}