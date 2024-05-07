package com.cibertec.waifustore.waifustore.repository;


import com.cibertec.waifustore.waifustore.model.Header;
import com.cibertec.waifustore.waifustore.model.Sales;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SalesRepository extends JpaRepository<Sales,Integer> {

    public List<Header> getSalesByHeaderId(Long header_id);

}
