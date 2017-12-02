<?php
/**
 * Created by PhpStorm.
 * User: dsent
 * Date: 27.11.17
 * Time: 22:37
 */

class Main extends CI_Controller
{
    public function index()
    {
        $this->load->view('templates/header');
        $this->load->view('main');
        $this->load->view('templates/footer');
    }

}