"""Remove team_id column from capacities model

Revision ID: 1340e2e5f418
Revises: 
Create Date: 2022-07-05 12:15:00.609892

"""
from alembic import op
import sqlalchemy as sa
import sqlmodel


# revision identifiers, used by Alembic.
revision = '1340e2e5f418'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('capacity_team_id_fkey', 'capacity', schema='app_db', type_='foreignkey')
    op.drop_column('capacity', 'team_id', schema='app_db')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('capacity', sa.Column('team_id', sa.INTEGER(), autoincrement=False, nullable=False), schema='app_db')
    op.create_foreign_key('capacity_team_id_fkey', 'capacity', 'team', ['team_id'], ['id'], source_schema='app_db', referent_schema='app_db')
    # ### end Alembic commands ###
