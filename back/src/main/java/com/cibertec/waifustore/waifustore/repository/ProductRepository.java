package com.cibertec.waifustore.waifustore.repository;

import com.cibertec.waifustore.waifustore.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

    @Query(value = "select\n" +
            "  *\n" +
            "from\n" +
            "  productos\n" +
            "where\n" +
            "  extract(\n" +
            "    month\n" +
            "    from\n" +
            "      fecha_publicacion\n" +
            "  ) = extract(\n" +
            "    month\n" +
            "    from\n" +
            "      current_date\n" +
            "  )\n" +
            "  and extract(\n" +
            "    year\n" +
            "    from\n" +
            "      fecha_publicacion\n" +
            "  ) = extract(\n" +
            "    year\n" +
            "    from\n" +
            "      current_date\n" +
            "  )", nativeQuery = true)
    List<Product> findProductosDelMes();

}
