package com.cibertec.waifustore.waifustore.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "cabecera")
@Data
@Getter
@Setter
public class Header {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "codigo_boleta", length = 100)
    private String code;

    @Column(name = "cant_producto")
    private Float cantidad;

    @Column(name = "monto")
    private Float amount;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Column(name = "fecha")
    @Temporal(TemporalType.DATE)
    private Date date;

    @ManyToOne
    @JoinColumn(name = "productos", referencedColumnName = "id")
    private Product product;


    @ManyToOne
    @JoinColumn(name = "metodo_pago", referencedColumnName = "id")
    private PayMethod payMethod;
    @OneToOne
    @JoinColumn(name = "cliente", referencedColumnName = "id")
    private Client client;

    @ManyToOne
    @JoinColumn(name = "estado", referencedColumnName = "id")
    private State state;

    @OneToMany(mappedBy = "header")
    private Set<Sales> sales;

    public Set<Sales> getSales() {
        return sales;
    }

    public void setSales(Set<Sales> sales) {
        this.sales = sales;
    }
}
