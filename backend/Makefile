r:
		python manage.py runserver

mig:
			python manage.py makemigrations &&\
					python manage.py migrate

delmig:

				rm -rf ./apps/cages/migrations/00*.py 
				rm -rf ./apps/farms/migrations/00*.py
				rm -rf ./apps/markets/migrations/00*.py
				rm -rf ./apps/profiles/migrations/00*.py
				rm -rf ./apps/rabbits/migrations/00*.py
				rm -rf ./apps/users/migrations/00*.py

u:
		python manage.py createsuperuser

fake_user:
						python3 manage.py runscript fake_data_users
						
fake_state:
						python3 manage.py runscript fake_data_states

fake_city:
						python3 manage.py runscript fake_data_cities
fake:
						python3 manage.py runscript fake_data_users &&\
								python3 manage.py runscript fake_data_states &&\
										python3 manage.py runscript fake_data_cities


