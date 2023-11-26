import express from 'express';
import AuthController from '../controllers/AuthController';
import PlantController from '../controllers/PlantController';

const router = express.Router();

router.post('/register', AuthController.validateRegister, AuthController.register);
router.post('/login', AuthController.validateLogin, AuthController.login);

router.get('/plants', AuthController.verifyJwt, PlantController.getPlants)

export default router