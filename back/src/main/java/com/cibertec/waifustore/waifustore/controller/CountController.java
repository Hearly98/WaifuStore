package com.cibertec.waifustore.waifustore.controller;
import com.cibertec.waifustore.waifustore.service.CountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth/count")
public class CountController {
    @Autowired
    private CountService countService;

    @GetMapping("/clients")
    public long getCountOfClients() {
        return countService.countClients();
    }

    @GetMapping("/workers")
    public long getCountOfWorkers() {
        return countService.countWorkers();
    }
}
