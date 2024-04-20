package com.cibertec.waifustore.waifustore.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Entity
@Table(name = "productos")
@Data
@Getter
@Setter
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "codigo", length = 100)
    private String code;

    @Column(name = "nombre", length = 100)
    private String name;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Column(name = "fecha_publicacion")
    @Temporal(TemporalType.DATE)
    private Date publishDate;

    @ManyToOne
    @JoinColumn(name = "id_marca", referencedColumnName = "id")
    private Brand brand;

    @ManyToOne
    @JoinColumn(name = "id_categoria", referencedColumnName = "id")
    private Category category;

    @Column(name = "monto")
    private Integer amount;

    @ManyToOne
    @JoinColumn(name = "estado", referencedColumnName = "id")
    private State state;

    @Column(name = "descripcion", length = 255)
    private String description;

    @Column(name = "imagen", length = 255)
    private String image;

    @Column(name = "stock")
    private Integer stock;

    public Integer getId() {
        return id;
    }
}
