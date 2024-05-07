package com.cibertec.waifustore.waifustore.model;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name="detalle_venta")
@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Sales {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @ManyToOne
    @JoinColumn(name = "productos", referencedColumnName = "id")
    private Product product;


    @Column(name = "cantidad",nullable = false)
    private Long amount;

    @Column(name = "precio_unitario",nullable = false)
    private BigDecimal unitPrice;
    @Column(name = "subtotal",nullable = false)
    private BigDecimal total;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="id_header")
    private Header header;
}
