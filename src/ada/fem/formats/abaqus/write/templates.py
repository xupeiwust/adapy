main_inp_str = r"""*Heading
** Generated by:
** Assembly For Design and Analysis (ADA) FEM IO (Abaqus)
*Preprint, echo=NO, model=NO, history=NO, contact=NO
{constr_ctrl}
**
** -------------------------------------------------------
** PARTS
** -------------------------------------------------------
{part_str}
** -------------------------------------------------------
** ASSEMBLY
** -------------------------------------------------------
*Assembly, name=Assembly
**
{instance_str}
**
*INCLUDE,INPUT=core_input_files\connectors.inp
*INCLUDE,INPUT=core_input_files\constraints.inp
*INCLUDE,INPUT=core_input_files\assembly_data.inp
**
*End Assembly
** -------------------------------------------------------
** Connector Sections and Amplitudes
** -------------------------------------------------------
{ampl_str}
{consec_str}
**
** -------------------------------------------------------
** INTERACTION PROPERTIES
** -------------------------------------------------------
{int_prop_str}
**
** -------------------------------------------------------
** MATERIALS
** -------------------------------------------------------
{mat_str}
**
** -------------------------------------------------------
** BOUNDARY CONDITIONS
** -------------------------------------------------------
{fix_str}
**
** -------------------------------------------------------
** INTERACTIONS
** -------------------------------------------------------
{interact_str}
**
** -------------------------------------------------------
** STEPS
** -------------------------------------------------------
{step_str}"""

step_inp_str = """**
** STEP: {name}
**
{step_input}
**
** BOUNDARY CONDITIONS
**
{bcs_str}
**
** LOADS
**
{load_str}
**
** INTERACTIONS
**
{int_str}
**
** OUTPUT REQUESTS
**
{restart_request_str}
{hist_output_str}
{field_output_str}
{app_str}
"""

__all__ = ["main_inp_str", "step_inp_str"]